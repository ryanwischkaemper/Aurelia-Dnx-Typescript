import {Aurelia,FrameworkConfiguration} from 'aurelia-framework';


export function configure(aurelia:Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .feature('resources',(config: FrameworkConfiguration)=>{});

  aurelia.start().then((aureliaInstance) => {

    // do any pre-app jobs here

    aureliaInstance.setRoot();
  });
}
