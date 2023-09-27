import { redirect } from "@tanstack/react-router"
import userManager from "../oidc-config"

const isAuthenticated = async () => {
    const user = await userManager.getUser()
    console.log('user is', user)
    if (!user) {
        throw redirect({
            to: '/login',
        })
    }
}

export default isAuthenticated
