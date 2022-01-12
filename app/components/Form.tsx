import React from 'react'
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
      className={[className, 'rounded px-8 pt-6 pb-8 bg-white'].join(' ')}
    >
      <fieldset disabled={disabled} className="flex flex-col items-start gap-3">
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
      className="border-slate-100 border w-full py-2 px-3 text-gray-700 leading-tight rounded text-base"
      defaultValue={defaultValue}
      required={required}
      onChange={onChange}
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
      className="border-slate-100 border w-full py-2 px-3 text-gray-700 leading-tight rounded text-base"
      defaultValue={defaultValue}
      required={required}
      step=".01"
    />
  </div>
)

type TextAreaProps = {
  label: string
  name: string
  id: string
  defaultValue?: string
}

export const TextArea = ({ label, name, id, defaultValue }: TextAreaProps) => (
  <div className="flex flex-col gap-2 w-full">
    <label htmlFor={id}>{label}</label>
    <textarea
      className="border-slate-100 border w-full py-2 px-3 text-gray-700 leading-tight rounded text-base"
      name={name}
      id={id}
      rows={5}
      defaultValue={defaultValue}
    ></textarea>
  </div>
)

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
        className="form-select cursor-pointer block appearance-none focus:shadow-outline border-slate-100 border w-full py-2 px-3 text-gray-700 leading-tight rounded text-base bg-clip-padding bg-no-repeat"
      >
        {children}
      </select>
    </div>
  )
}
