import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Hello from Vercel" }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-2 p-4 bg-yellow-100 border-l-4 border-yellow-500">
        Esta página está em desenvolvimento.
      </p>
      <pre className="mt-4 p-2 bg-gray-100 rounded">{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}
