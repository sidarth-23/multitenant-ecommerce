import { APP_NAME } from "@/consts"

export const Footer = () => {
  return (
    <footer className="flex border-t justify-between font-medium p-6 bg-main/10">
      <div className="flex items-center gap-2">
        <p>{APP_NAME}, Inc.</p>
      </div>
    </footer>
  )
}