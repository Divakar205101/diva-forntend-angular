import { ModuleFeature } from "./ModuleFeatures";

export class Module {
    id!: number;
    moduleId!: string;
    moduleName!: string;
    description!:string;
    featuresDOs!: ModuleFeature[];
  }