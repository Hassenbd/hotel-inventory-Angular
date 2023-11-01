import { ErrorHandler } from "@angular/core";

export class errorHandler implements ErrorHandler{
  handleError(error:any) {
    console.log(error);
  }

}
