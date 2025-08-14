export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`${className} bg-white rounded-lg flex items-center justify-center font-bold text-green-600 shadow-sm`}>
      <span className="text-xl leading-none">SS</span>
    </div>
  )
}