import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			lang: z.enum(['en', 'zh']),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			translation: z.object({
				en: z.string().optional(),
				zh: z.string().optional(),
			}).optional(),
			draft: z.boolean().default(false),

			// ✅ 新增：tags 字段
			tags: z.array(z.string()).optional(),   // 标签数组，可选

			// ✅ 新增：featured 字段（精选文章）
			featured: z.boolean().default(false),   // 默认非精选
		}),
});

export const collections = { blog };