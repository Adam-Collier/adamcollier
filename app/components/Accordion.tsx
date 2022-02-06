import React, { useState } from 'react'

export const Accordion = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  const [sectionIsOpen, setAccorsionIsOpen] = useState(false)

  const iconClass = sectionIsOpen
    ? 'i-ri:checkbox-indeterminate-line'
    : 'i-ri:add-box-line'

  return (
    <div className="space-y-2">
      <button
        className="flex items-center gap-1.5"
        type="button"
        onClick={() => setAccorsionIsOpen(!sectionIsOpen)}
      >
        <span className={[iconClass, 'h-3.5 w-3.5 block'].join(' ')}></span>
        <p className="text-sm font-[400]">{title}</p>
      </button>
      {sectionIsOpen && children}
    </div>
  )
}
