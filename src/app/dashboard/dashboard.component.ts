import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { HttpErrorResponse } from '@angular/common/http';

// import { ImageService } from '../image.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']  // Corrected to styleUrls
// })
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // username: String="admin"
  // password: String="admin"
  // whatToShow:number=0


  // loginNow(){
  //   console.log(this.username,this.password)
  //   this.whatToShow=1
  // }




  selectFile!:File;
  customName: string = '';
  description: string = '';
  deom: string ='';
  images:any[]=[];

  constructor(public imageService:ImageService){}

// onFileChanged(event: any) {
//   this.selectFile = event.target.files[0];
//   const maxSizeInMB = 50;
//   const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

//   if (this.selectFile.size > maxSizeInBytes) {
//     alert(`File size exceeds ${maxSizeInMB}MB. Please choose a smaller file.`);
//    // this.selectFile = null;
//   } else {
//     console.log("Selected file:", this.selectFile);
//   }
// }

onUpload() {
  // if (!this.selectFile) {
  //   alert("Please select a file first.");
  //   return;
  // }

  console.log("Uploading...");
  this.imageService.uploadImage(this.selectFiles, this.customName, this.description).subscribe(res => {
    console.log(res);
    window.alert("Image uploaded successfully...");
  })
}


selectFiles: File[] = [];

onFilesChanged(event: any) {
  this.selectFiles = event.target.files;
  const maxSizeInMB = 50;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  for (let i = 0; i < this.selectFiles.length; i++) {
    if (this.selectFiles[i].size > maxSizeInBytes) {
      alert(`File size exceeds ${maxSizeInMB}MB for ${this.selectFiles[i].name}. Please choose a smaller file.`);
      this.selectFiles = [];  // Clear the selection if any file is too large
      return;
    }
  }
  console.log("Selected files:", this.selectFiles);
}

// onUpload() {
//   if (this.selectFiles.length === 0) {
//     alert("Please select at least one file.");
//     return;
//   }

//   for (let file of this.selectFiles) {
//     this.imageService.uploadImage([file], this.customName, this.description).subscribe(
//       (res: any) => {
//         console.log("Response from server:", res);
//         alert(res.message || "Image uploaded successfully...");
//       },
     
//     );
//   }
// }
}