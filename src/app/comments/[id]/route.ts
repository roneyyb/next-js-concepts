export { comments } from "../data"

export async function GET(_request: Request, { params }: { params: { id: string } }) {

    const comment = comments.find(item => +item.id === +params.id);

    return Response.json(comment);

}