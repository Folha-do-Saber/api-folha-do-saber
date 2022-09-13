import { Request, Response } from "express"
import userDeleteService from "../../service/users/deleteUser.service"

const userDeleteController = async (req: Request, res: Response) => {
    const id = req.params.id

    const userDeleted = await userDeleteService(id)

    return res.status(204).json({ message: userDeleted })
}

export default userDeleteController