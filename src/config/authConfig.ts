import { Role } from '../../src/generated/graphql';
import { Authorized } from 'type-graphql';
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
  applyModelsEnhanceMap,
  ModelsEnhanceMap,
  InputTypesEnhanceMap,
  applyInputTypesEnhanceMap,
} from '../generated/graphql/enhance';

export const restricted = [];

export const unRestricted = [Authorized()];

const resolversEnhanceMap: ResolversEnhanceMap = {
  Like: {
    _all: [Authorized(Role.USER, Role.ADMIN, Role.MANAGER, Role.SUPER_ADMIN)],
  },
};

const modelsEnhanceMap: ModelsEnhanceMap = {};

const inputsValidation: InputTypesEnhanceMap = {};

export const Resolve = (): void => {
  applyResolversEnhanceMap(resolversEnhanceMap);
  applyModelsEnhanceMap(modelsEnhanceMap);
  applyInputTypesEnhanceMap(inputsValidation);
};
