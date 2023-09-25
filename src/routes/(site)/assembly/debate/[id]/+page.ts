import type { Prop } from "$lib/utils/typed_props.js"
import type Comment from "./Comment.svelte"

export async function load({ params }) {

    return {
        id: Number(params.id),
        users,
        comments
    }
}

type User = {
    first_name: string,
    last_name: string,
}


const users: Record<number, User> = {
    1: {
        first_name: "John",
        last_name: "Smith",
    },
    2: {
        first_name: "Jane",
        last_name: "Smith",
    }
}

const comments: Record<number, Prop<Comment, "comment">> = {
    1: {
        id: 1,
        user: 1,
        text: "Making names public would increase accountability and elevate the level of discourse on this platform. When people use their real names, they're more likely to think twice before posting hateful or misleading content.",
        argument: {
            parent: 2,
            side: "support"
        },
        rating: 3.5,
        votes: 10,
    },
    2: {
        id: 2,
        user: 1,
        text: "Accountability is key to a functioning democracy. If you're going to participate in shaping laws and policy, you should be willing to stand behind your words.",
        argument: {
            parent: 3,
            side: "support"
        },
        rating: 2.5,
        votes: 3,
    },
    3: {
        id: 3,
        user: 2,
        text: "We should make all names public",
        argument: null,
        rating: 2,
        votes: 9,
    },
    4: {
        id: 4,
        user: 2,
        text: "I strongly disagree. Making names public could have a chilling effect on free speech and could discourage many from participating due to fears of doxxing or harassment.",
        argument: {
            parent: 3,
            side: "against"
        },
        rating: 3.5,
        votes: 10,
    },
    5: {
        id: 5,
        user: 2,
        text: "Moreover, public names would make it easier for bad actors to scrape data and create profiles for targeted phishing or social engineering attacks. Privacy should be a top concern for a platform like this.",
        argument: {
            parent: 3,
            side: "against"
        },
        rating: 3,
        votes: 5,
    }
}