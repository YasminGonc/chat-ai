type Def$8f9f8a86 = {
    'title': string,
  };
  
  declare module '@croct/plug/slot' {
    type TitleV1 = Def$8f9f8a86 & {'_component': 'title@1' | null};
    
    export interface VersionedSlotMap {
      'title': {
        latest: TitleV1,
        '1': TitleV1,
      };
    }
  }
  
export {};