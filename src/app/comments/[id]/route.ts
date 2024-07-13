import { comments } from "../data";


export async function GET(_request: Request, { params }: { params: { id: string } }) {

    const comment = comments.find(item => +item.id === +params.id);

    return Response.json(comment);

}


export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = request.json();

    const { text } = body;

    const findCommentIndex = comments.findIndex(item => +item.id === +params.id);

    comments[findCommentIndex].text = text;

    return Response.json(comments[findCommentIndex])

}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {

    const findCommentIndex = comments.findIndex(item => +item.id === +params.id);

    const deletedComment = comments[findCommentIndex];
    comments.splice(findCommentIndex, 1);

    return Response.json(deletedComment);
}