import { Modules } from '../shared/modules.model';

export class Course {
  public name: string;
  public description: string;
  public iconPath: string;
  public modules: Modules[];

  constructor(
    name: string,
    desc: string,
    iconPath: string,
    modules: Modules[]
  ) {
    this.name = name;
    this.description = desc;
    this.iconPath = iconPath;
    this.modules = modules;
  }
}
