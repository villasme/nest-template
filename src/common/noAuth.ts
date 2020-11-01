import { SetMetadata } from "@nestjs/common"

export const NoAuth: () => any = () => SetMetadata('no-auth', true);