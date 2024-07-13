import { type NextRequest } from "next/server";
import { comments } from "../data";
import { redirect } from "next/navigation";


export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {

    if (+params.id > comments.length) {
        redirect("/comments")
    }
    const comment = comments.find(item => +item.id === +params.id);

    return Response.json(comment);

}


export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const body = request.json();

    const { text } = body;

    const findCommentIndex = comments.findIndex(item => +item.id === +params.id);

    comments[findCommentIndex].text = text;

    return Response.json(comments[findCommentIndex])

}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {

    const findCommentIndex = comments.findIndex(item => +item.id === +params.id);

    const deletedComment = comments[findCommentIndex];
    comments.splice(findCommentIndex, 1);

    return Response.json(deletedComment);
}