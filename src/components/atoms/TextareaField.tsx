export default function TextareaField () {
    return (
        <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
            </label>
            <textarea
                id="message"
                name="message" required
                rows={4}
                placeholder="I wanna hire you...."
                className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
    )
}