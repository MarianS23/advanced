import { TestBed } from '@angular/core/testing';

import { PostsOperatorService } from './posts-operator.service';

describe('PostsOperatorService', () => {
  let service: PostsOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
