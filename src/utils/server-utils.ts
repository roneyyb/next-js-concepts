import "server-only"

export const serverSideFunction = () => {
    console.log(`use multiple libraries, user environment variables, interact witha database, process confidential information`);

    return "server result"
}