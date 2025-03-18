import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        const secretKey = process.env.JWT_SECRET_KEY || 'defaultSecretKey'; 
        if(!secretKey){
            throw new Error('ไปหาkeyมาด้วย')
        }
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
            ignoreExpiration: false,
            secretOrKey: secretKey, 
        });
    }

    async validate(payload: any) {
        return { user_id: payload.user_id }; 
    }
}


