import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import MarkdownIt from "markdown-it"
import sanitizeHtml from "sanitize-html"

const parser = new MarkdownIt()

export async function GET(context) {
	const posts = await getCollection("post")
	return rss({
		description: "✨ Coding with Love, Exploring the World.",
		items: posts.map(post => ({
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			}),
			description: post.data.summary,
			link: `/post/${post.slug}/`,
			pubDate: post.data.publishedAt,
			title: post.data.title,
		})),
		site: context.site,
		stylesheet: "/feed.xsl",
		title: "Hi, Xat!",
		trailingSlash: false,
	})
}
