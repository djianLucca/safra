import { Injectable, Injector } from '@angular/core';

@Injectable()
export class FacadeService {

  // private _exampleService: ExampleService;
  // private get exampleService(): ExampleService {
  //   if(!this._exampleService){
  //     this._exampleService = this.injector.get(ExampleService);
  //   }
  //   return this._exampleService;
  // }

  constructor(private injector: Injector) {  }
  
  // getExamples(){return this.exampleService.get()}
  // getExampleById(id){return this.exampleService.getById(id)}
  // postExample(example){return this.exampleService.post(example)}
  // deleteExample(example){return this.exampleService.delete(example)}

}
