package com.hnt.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.hnt.UserRepository;
import com.hnt.entity.User;
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

	@Mock
	UserRepository repository;
	
	@InjectMocks
	UserService userService;
	
	
	@Test
	void testsave() {
		User user = new User();
		user.setId(1);
		when(repository.save(user)).thenReturn(user);
				userService.save(user);
		assertEquals(1, user.getId());
		
	 
	}
	@Test
	void testSaveForException() {
		assertThrows(IllegalArgumentException.class, ()->{
			User user = new User();
			user.setName("Ram");
			userService.save(user);
		});
	}

	
 

}
