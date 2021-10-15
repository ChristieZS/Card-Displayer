import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarddetailsComponent } from './carddetails.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('CarddetailsComponent', () => {
    let component: CarddetailsComponent;
    let fixture: ComponentFixture<CarddetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ CarddetailsComponent, RouterTestingModule ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(CarddetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should format PAN correctly', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const formattedPAN = card.formatPAN('1234567890987654') 

        //Assert
        expect(formattedPAN).toBe('1234 56** **** 7654')
    })

    // Not enough info for formatting this. I assume this would be an invalid string if not exactly the correct length 
    // however have left simple for now
    // If this assumption is correct, there is future work to test for fail cases
    // e.g. if a PAN all numbers? fail on string
    // e.g. test for correct length
    // e.g. how should it fail? blank text? or throw error?
    it('should format PAN correctly (even if larger)', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const formattedPAN = card.formatPAN('11112222333344445555') 

        //Assert
        expect(formattedPAN).toBe('1111 22** **** 4444 5555')
    })

    
    it('should format authorisation text correctly', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const formattedPAN = card.checkAuthorisations(100) 

        //Assert
        expect(formattedPAN).toBe('100.00')
    })

        
    it('should format authorisation text correctly if undefined', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const text = card.checkAuthorisations(undefined) 

        //Assert
        expect(text).toBe('0.00')
    })

    it('should return correct cardImageStatus', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const text = card.cardImageStatus('EXPIRED') 

        //Assert
        expect(text).toBe('inactive')
    })

    it('should return correct cardImageStatus', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const text = card.cardImageStatus('BLOCKED') 

        //Assert
        expect(text).toBe('inactive')
    })

    it('should return correct cardImageStatus', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const text = card.cardImageStatus('ACTIVE') 

        //Assert
        expect(text).toBe('active')
    })

    it('should return correct cardImageStatus', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const text = card.cardImageStatus(undefined) 

        //Assert
        expect(text).toBe('inactive')
    })

    it('should return correct cardImageStatus', () => {
        //Arrange
        const card = new CarddetailsComponent(null, null, null)

        //Act
        const text = card.cardImageStatus('Anything else') 

        //Assert
        expect(text).toBe('inactive')
    })
});
