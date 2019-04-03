package sexygroup.spring.service;

import sexygroup.spring.pojo.Admin;

import java.util.List;
import java.util.Optional;

public interface AdminService {

    List<Admin> findAll();

    Optional<Admin> findById(Integer id);

    Admin save(Admin admin);

    void deleteById(Integer id);
}
