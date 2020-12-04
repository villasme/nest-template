import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PATH_METADATA, MODULE_METADATA } from '@nestjs/common/constants'

const { IMPORTS, CONTROLLERS } = MODULE_METADATA

function resolveController (target, controllers = []) {
  controllers.push(...(Reflect.getMetadata(CONTROLLERS, target) ?? []))
  const imports = Reflect.getMetadata(IMPORTS, target)
  if (imports) {
    imports.forEach(module => {
      resolveController(module, controllers)
    })
  }
  return controllers
}

export const SetModulePrefix = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export function setModulePrefix (prefix:string) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (target: any) => {
    resolveController(target).forEach(controller => {
      const path = Reflect.getMetadata(PATH_METADATA, controller)
      if (path) {
        Reflect.defineMetadata(PATH_METADATA, prefix + '/' + path, controller)
      }
    })
  }
}