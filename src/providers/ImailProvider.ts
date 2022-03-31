interface IAddress {
  email: string;
  name: string;
}

export interface Imessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(messsage: Imessage): Promise<void>;
}
