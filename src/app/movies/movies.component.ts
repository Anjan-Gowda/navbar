import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(    public dialog: MatDialog
    ) {}

  ngOnInit() {
  
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: [
        {label:"User name",placeholder:"User name",ngmodel:""},
        {label:"Password",placeholder:"Password",ngmodel:""},
        ],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed',result);
    });
  }
}
 