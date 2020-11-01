import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { IAuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { Observable } from "rxjs";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";

@Injectable()
export class RoleAuthGuard implements CanActivate {
    constructor (private readonly reflector: Reflector) {}
    canActivate (context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        // 在这里取metadata中的no-auth，得到的会是一个bool
        const noAuth = this.reflector.get<boolean>('no-auth', context.getHandler());
        const guard = RoleAuthGuard.getAuthGuard(noAuth)
        const request: Request = context.switchToHttp().getRequest()
        const rolePath = /^(\/api)/
        /** /api做权限 */
        if (rolePath.test(request.originalUrl)) {
            return guard.canActivate(context);
        } else {
            return true
        }
        
    }

    //  根据NoAuth的t/f选择合适的策略Guard
    private static getAuthGuard(noAuth: boolean): IAuthGuard {
        if (noAuth) {
            return new LocalAuthGuard();
        } else {
            return new JwtAuthGuard();
        }
    }
}