﻿using System;
using System.Collections.Generic;

namespace EduSync.DataAccess.Entities;

public partial class User
{
    public int UserId { get; set; }

    public string? UserName { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public int? RoleId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public DateTime? LastLogin { get; set; }

    public bool? IsActive { get; set; }
}
