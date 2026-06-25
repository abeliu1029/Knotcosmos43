import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { marked } from 'marked';   // 需要先安装: npm install marked

export async function GET(context) {
  const posts = await getCollection('blog');

  // 对每篇文章，将 Markdown 正文转为 HTML
  const items = await Promise.all(
    posts.map(async (post) => {
      // 使用 marked 将 post.body（原始 Markdown）转为 HTML
      const fullHtml = await marked.parse(post.body);
      
      return {
        ...post.data,               // 保留 frontmatter 中所有字段（title, pubDate 等）
        link: `/blog/${post.id}/`,
        description: fullHtml,      // 覆盖 description 为完整全文
        // 可选：同时使用 content:encoded 存放全文（Rogue Scholar 也支持）
        // customData: `<content:encoded><![CDATA[ ${fullHtml} ]]></content:encoded>`,
      };
    })
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}