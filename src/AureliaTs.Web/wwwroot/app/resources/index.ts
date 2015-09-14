import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(frameworkConfig:FrameworkConfiguration) {
    frameworkConfig
      .globalResources([
        './valueconverters/sort',
        './valueconverters/take'
      ]);
}
