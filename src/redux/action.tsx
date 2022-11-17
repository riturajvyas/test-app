

type UpdateContentAction = {
    type: "UPDATE_CONTENT",
    payload: {
        content: string
    }
}

export function updateContent(content: string): UpdateContentAction {
    return {
        type: "UPDATE_CONTENT",
        payload: {
            content
        } 
    }
}

export type Actions = UpdateContentAction