import React, { useState } from 'react'
type QA = { id: string, q: string, a: string }
type Topic = { slug: string, title: string, teaser: string, qas: QA[], glossary?: string[], quickWins?: string[] }
type Data = { topics: Topic[] }
export function KbApp({ data, ssrVisibleQAs = 3 }: { data: Data, ssrVisibleQAs?: number }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const toggle = (topicSlug: string, qid: string) => {
    const key = topicSlug + ':' + qid
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }))
  }
  return (
    <div className="tc-snow">
      <div className="kb-container">
        <h1>Knowledgebase</h1>
        <div className="tile-grid">
        {data.topics.map(topic => (
          <article key={topic.slug} className="tile" aria-labelledby={`${topic.slug}-title`}>
            <h2 id={`${topic.slug}-title`}>{topic.title}</h2>
            <p>{topic.teaser}</p>
            <div>
              {(topic.qas || []).map((qa, idx) => {
                const defaultOpen = idx < ssrVisibleQAs
                const key = topic.slug + ':' + qa.id
                const isOpen = expanded[key] ?? defaultOpen
                return (
                  <div key={qa.id} className="qa" aria-expanded={isOpen}>
                    <button className="qa-toggle" aria-controls={`${key}-a`} onClick={() => toggle(topic.slug, qa.id)}>
                      {qa.q}
                    </button>
                    <div id={`${key}-a`} className="a">
                      <p>{qa.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            {topic.glossary && topic.glossary.length > 0 && (
              <div className="glossary">
                {topic.glossary.map(term => <span className="chip" key={term}>{term}</span>)}
              </div>
            )}
            {topic.quickWins && topic.quickWins.length > 0 && (
              <div className="quickwins">
                <strong>Quick wins:</strong>
                <ul>
                  {topic.quickWins.map((w,i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            )}
          </article>
        ))}
        </div>
      </div>
    </div>
  )
}
export default KbApp
