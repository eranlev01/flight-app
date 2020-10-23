import { TestBed, inject } from '@angular/core/testing';

import { MainService } from './main.service';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a filter function',
    inject([MainService], (service: MainService) => {
      expect(service.filter).toBeTruthy();
    })
  )

  it('should get filterd array of flights', () => {
    expect(service.filter({
      connections: '0',
      depart: "2020-10-20",
      from: "Israel",
      maxPrice: 190,
      minPrice: 100,
      return: "2020-10-30",
      to: "Istanbul"
    })).toEqual([])
  })

});
