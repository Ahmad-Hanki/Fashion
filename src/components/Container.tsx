import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

const Container = ({children}:ContainerProps) => {
  return (
    <div className="max-w-5xl mx-auto">
        {children}
    </div>
  )
}

export default Container