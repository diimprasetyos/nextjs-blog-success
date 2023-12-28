export const getBlogData = async (resource: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`)
    const blog = await response.json()
    return blog
}