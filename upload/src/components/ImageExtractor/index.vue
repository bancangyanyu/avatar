<template>
  <div class="container">
    <!-- 文件上传组件 -->
    <a-upload
      name="file" 
      :multiple="true"
      :before-upload="handleBeforeUpload"
      :showUploadList="false"
      accept=".md"
    >
      <a-button type="primary">
        <template #icon><UploadOutlined /></template>
        选择 Markdown 文件
      </a-button>
    </a-upload>

    <!-- 结果显示区域 -->
    <div v-if="results.length > 0" class="results">
      <a-list item-layout="horizontal" :data-source="results">
        <template #renderItem="{ item }">
          <a-list-item>
            <div class="ant-list-item-meta">
              <a-textarea
                  v-model:value="item.links"
                  placeholder="Autosize height based on content lines"
                  auto-size
              />
              <div style="margin: 24px 0" />
              <a-textarea
                  v-model:value="item.strLinks"
                  placeholder="Autosize height with minimum and maximum number of lines"
                  :auto-size="{ minRows: 2, maxRows: 5 }"
              />
            </div>
          </a-list-item>
        </template>
      </a-list>


    </div>
  </div>
</template>

<script setup>
import { UploadOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const form  = ref({
    arr:[], 
    data:''
})
const results = ref([]);
// 处理文件选择
const handleBeforeUpload = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target.result;
    const links = extractImageLinks(content);

    const strLinks = links.join('*');
    results.value.push({
      fileName: file.name,
      links: links,
      strLinks: strLinks
    });

  };
  reader.readAsText(file);

  return false; // 阻止自动上传
};

// 提取图片链接逻辑
const extractImageLinks = (markdownContent) => {
  // 处理换行符，将所有换行符替换为空格
  const processedContent = markdownContent.replace(/\r?\n/g, ' ');

  // 分割字符串为数组，每个元素是一个图片链接
  const imageLinks = [];

  // 找到所有 "](http://..." 的位置
  let startIndex = 0;
  while (true) {
    const startBracketIndex = processedContent.indexOf('](', startIndex);
    if (startBracketIndex === -1) break;

    const endBracketIndex = processedContent.indexOf(')', startBracketIndex + 2);
    if (endBracketIndex === -1) break;

    const imageUrl = processedContent.substring(startBracketIndex + 2, endBracketIndex);
    imageLinks.push(imageUrl);

    startIndex = endBracketIndex + 1;
  }

  console.log(imageLinks);
  return imageLinks;
};

// 格式化结果显示
const formatResult = (item) => {
  return `文件: ${item.fileName}\n链接数组: ${JSON.stringify(item.links)}\n拼接字符串: ${item.strLinks}`;
};
</script>

<style scoped>
.container {
  min-width: 80vw;
  margin: 20px auto;
  //padding: 20px;
}
.results {
  margin-top: 20px;
}
:deep(.ant-list-item-meta-description) {
  white-space: pre-wrap;
  font-family: monospace;
}
.ant-list-item-meta{
  display: flex;
  flex-direction: column;
}
</style>
