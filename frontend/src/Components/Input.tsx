import { LucideIcon } from "lucide-react"
import { ChangeEvent } from "react"

// interface InputProps {
//     icon: React.ComponentType,
//     type: "text" | "number" | "email" | "password"
//     label: string
//     value: string | number
//     name: string
//     placeholder: string
//     error: boolean
//     disabled?: boolean
//     onChange: (e:ChangeEvent<HTMLInputElement>) => void
// }

// const Input: FC<InputProps> = ({
//     type, label, value, name, placeholder, error, disabled, onChange,
// }) => {
//   return (
//     <div className="relative mb-6">
//         {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <Icon classname="size-5 text-green-500"/>
//         </div> */}
//         <input
//         type={type} id={label} value={value} name={name} placeholder={placeholder} onChange={onChange} disabled={disabled}
//         className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
//         />
//     </div>
//   )
// }

const Input = ({
    Icon, 
    type,
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    onChange,
}: {
    Icon: LucideIcon,
    type: "text" | "email" | "number" | "password",
    label: string
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    onBlur: (e: ChangeEvent<HTMLInputElement>) => void
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="relative mb-6">
        <label htmlFor={label}>{label}</label>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
			<Icon className='size-5 text-green-500' />
	    </div>
        <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
        />
      {/* {error && <p className="error">Input field can't be empty!</p>} */}
    </div>
  )
}

// const Input: FC<InputProps> = ({
//     icon: Icon,
//     type,
//     label,
//     value,
//     name,
//     placeholder,
//     error,
//     disabled,
//     onChange,
// }) => {}


export default Input