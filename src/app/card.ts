export interface Card {
    expiry: string;
    reference: string;
    holder: {
        [key: string]: string
    };                    
    limit: number;
    accountBid: string;
    cardType: string;
    currency: string;
    id: string;
    maskedPan: string;
    spend: number;
    authorisationLimit: number;
    authorisations: number;
    cardScheme: string;
    status : string;
}