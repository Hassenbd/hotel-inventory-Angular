import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Validator } from './validators/validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private fb: FormBuilder,private route:ActivatedRoute) {}

  id=this.route.snapshot.paramMap.get("roomid");
  ngOnInit(): void {
    this.bookingForm = this.fb.group(
      {
        // roomId: new FormControl('', { validators: [Validators.required] }),
        roomId: new FormControl(
          {value:this.id,disabled:true},
          {validators:[Validators.required]}
        ),
        guestEmail: ['', [Validators.required]],

        checkinDate: [''],
        checkoutDate: [''],

        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],

        mobileNumber: ['', [Validators.minLength(8), Validators.required]],
        guestName: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validator.ValidateName,
            Validator.ValidateChar('*'),
          ],
        }),

        address: this.fb.group({
          addressLine1: ['', [Validators.required]],
          addressLine2: [''],
          City: [''],
          State: [''],
          Country: [''],
          ZipCode: [''],
        }),
        guests: this.fb.array([
          this.fb.group({
            guestName: new FormControl('', [Validators.required]),
            age: new FormControl(''),
          }),
        ]),
        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      },
      {
        updateOn: 'blur',  validators: [Validator.validateDate]
      }
    );

    this.bookingForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  addBook() {
    console.log(this.bookingForm.value);

    this.bookingForm.reset({
      roomId: '',
      guestEmail: '',

      checkinDate: '',
      checkoutDate: '',

      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',

      mobileNumber: '',
      guestName: '',

      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      }),

      guests: [],
      tnc: false,
    });
  }

  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: new FormControl(''),
        age: new FormControl(''),
      })
    );
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport() {
    if (this.bookingForm.get('passport'))
      this.bookingForm.removeControl('passport');
  }

  removeGuest(id: number) {
    this.guests.removeAt(id);
  }
}
