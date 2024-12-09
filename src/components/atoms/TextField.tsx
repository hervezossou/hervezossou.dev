interface TextFieldProps {
    label: string
    type: string
    name: string
    placeholder: string
}

export default function TextField ({label, name, type, placeholder} : TextFieldProps) {
    return (
        <div>
            <label htmlFor={label.toLowerCase()} className="block text-sm font-medium mb-2">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                name={name} required
                id={label.toLowerCase()}
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
    )
}