import { Model, Schema, model, models } from "mongoose"

export type UserModelType = {
    _id: Schema.Types.ObjectId,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
}

const UserSchema = new Schema<UserModelType>({
    firstName: { type: String, required: false, },
    lastName : { type: String, required: false, },
    email: { type: String, required: false, unique:true },
    createdAt: { type: Date, default: Date.now, required: true, immutable: true },
    updatedAt: { type: Date, default: Date.now, required: true}
});

export const UserModel: Model<UserModelType>  = models['Users'] || model<UserModelType>("Users", UserSchema)