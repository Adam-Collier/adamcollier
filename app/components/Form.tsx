import React, { useEffect, useRef } from 'react'
import { Form as RemixForm, FormProps as RemixFormProps } from 'remix'

interface FormProps extends RemixFormProps {
  className?: string
  disabled?: boolean
  children?: React.ReactNode
}

export const Form = (props: FormProps) => {
  const { className, children, disabled, ...rest } = props
  return (
    <RemixForm
      {...rest}
      className={[className, 'rounded bg-white w-full'].join(' ')}
    >
      <fieldset
        disabled={disabled}
        className="flex flex-col items-start gap-3 w-full"
      >
        {children}
      </fieldset>
    </RemixForm>
  )
}

type TextInputProps = {
  name: string
  label: string
  defaultValue?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<any>) => void
}

export const TextInput = ({
  name,
  label,
  defaultValue,
  required,
  onChange,
}: TextInputProps) => (
  <div className="flex flex-col gap-2 w-full">
    <label htmlFor={name} className="font-medium">
      {label}
    </label>
    <input
      type="text"
      id={name}
      name={name}
      className="border-slate-300 border w-full py-2 px-3 text-black leading-tight rounded text-base"
      defaultValue={defaultValue}
      required={required}
      onChange={onChange}
      spellCheck={true}
    />
  </div>
)

type NumberInputProps = {
  name: string
  label: string
  defaultValue?: string
  required?: boolean
}

export const NumberInput = ({
  name,
  label,
  defaultValue,
  required,
}: NumberInputProps) => (
  <div className="flex flex-col gap-2 w-full">
    <label htmlFor={name} className="font-medium">
      {label}
    </label>
    <input
      type="number"
      id={name}
      name={name}
      className="border-slate-300 border w-full py-2 px-3 text-black leading-tight rounded text-base"
      defaultValue={defaultValue}
      required={required}
      step=".01"
    />
  </div>
)

type TextAreaProps = {
  label: string
  name: string
  defaultValue?: string
  rows?: number
}

export const TextArea = ({
  label,
  name,
  defaultValue,
  rows = 5,
}: TextAreaProps) => {
  const textarea = useRef<HTMLTextAreaElement>(null)
  // if we change the line height in css make sure to change this
  let lineHeight = 1.75
  let initialLimit = rows * (lineHeight * 16)
  const handleChange = (e: React.ChangeEvent<any>) => {
    let scrollLeft =
      window.pageXOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollLeft
    let scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop
    e.target.style.height = 'auto'
    e.target.style.height = `${Math.max(e.target.scrollHeight, initialLimit)}px`
    window.scrollTo(scrollLeft, scrollTop)
  }

  useEffect(() => {
    if (textarea.current) {
      textarea.current.style.height = 'inherit'
      textarea.current.style.height = `${Math.max(
        textarea.current.scrollHeight,
        initialLimit,
      )}px`
    }
  }, [])

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name}>{label}</label>
      <textarea
        ref={textarea}
        className="border-slate-300 border w-full p-3 text-black leading-7 rounded text-base resize-none overflow-hidden"
        name={name}
        id={name}
        rows={rows}
        defaultValue={defaultValue}
        spellCheck={true}
        onChange={handleChange}
      ></textarea>
    </div>
  )
}

type RadioButtonProps = {
  name: string
  value: number | string
  label: string
  defaultChecked?: boolean
}

export const RadioButton = ({
  name,
  value,
  label,
  defaultChecked,
}: RadioButtonProps) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      required
      className="sr-only checked:sibling:border-black"
      defaultChecked={defaultChecked}
    />
    <p className="text-xs rounded px-2.5 py-1.5 border border-gray-100 cursor-pointer	">
      {label}
    </p>
  </label>
)

type DropDownProps = {
  name: string
  label: string
  children: React.ReactNode
}

export const DropDown = ({ name, label, children }: DropDownProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="form-select cursor-pointer block appearance-none focus:shadow-outline border-slate-300 border w-full py-2 px-3 text-black leading-tight rounded text-base bg-clip-padding bg-no-repeat"
      >
        {children}
      </select>
    </div>
  )
}
