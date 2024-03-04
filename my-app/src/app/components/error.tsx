
export function ErrorComponent({ error }: { error: string }) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <p>{error}</p>
        </div>
    )
}