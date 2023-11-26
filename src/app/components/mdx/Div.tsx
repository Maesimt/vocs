import { clsx } from 'clsx'
import { type DetailedHTMLProps, type HTMLAttributes } from 'react'

import { Authors } from '../Authors.js'
import { BlogPosts } from '../BlogPosts.js'
import { AutolinkIcon } from './AutolinkIcon.js'
import { CodeBlock } from './CodeBlock.js'
import { CodeGroup } from './CodeGroup.js'
import { CodeTitle } from './CodeTitle.js'
import * as styles from './Div.css.js'
import { Steps } from './Steps.js'
import { Subtitle } from './Subtitle.js'

export function Div(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const className = clsx(props.className, styles.root)
  if (props.className === 'code-group')
    return <CodeGroup {...(props as any)} className={className} />
  if ('data-authors' in props) return <Authors />
  if ('data-blog-posts' in props) return <BlogPosts />
  if ('data-autolink-icon' in props)
    return <AutolinkIcon {...(props as any)} className={className} />
  if ('data-rehype-pretty-code-title' in props)
    return <CodeTitle {...(props as any)} className={className} />
  if ('data-rehype-pretty-code-fragment' in props)
    return <CodeBlock {...(props as any)} className={className} />
  if ('data-vocs-steps' in props) return <Steps {...(props as any)} className={className} />
  if (props.role === 'doc-subtitle') return <Subtitle {...(props as any)} />
  return <div {...props} className={className} />
}
