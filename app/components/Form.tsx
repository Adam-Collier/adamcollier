import { Form as RemixForm, FormProps as RemixFormProps } from "remix";

interface FormProps extends RemixFormProps {
	className?: string
	disabled?: boolean
}

export const Form = (props: FormProps) => {
	const { className, children, disabled, ...rest } = props;
	return (
		<RemixForm {...rest} className={[className, "shadow-sm rounded px-8 pt-6 pb-8 bg-white"].join(" ")}>
			<fieldset disabled={disabled} className="flex flex-col items-start gap-3">{children}</fieldset>
		</RemixForm>
	)
}

type TextInputProps = {
	id: string,
	name: string,
	label: string,
}

export const TextInput = ({ id, name, label }: TextInputProps) => (
	<div className="flex flex-col gap-2 w-full" >
		<label htmlFor={id}>{label}</label>
		<input
			type="text"
			id={id}
			name={name}
			className="border-slate-100 border w-full py-2 px-3 text-gray-700 leading-tight rounded text-base"
		/>
	</div >
)