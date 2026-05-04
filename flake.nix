{
  description = "dgramop frontend";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
        {
          packages.default = pkgs.stdenv.mkDerivation {
            name = "dgramop_frontend";
            src = self;
            nativeBuildInputs = [ pkgs.zola ];
            buildPhase = "zola build";
            installPhase = ''
              mkdir -p $out
              mv public $out/www
            '';
          };

          devShells.default = pkgs.mkShell {
            buildInputs = [ pkgs.zola ];
            shellHook = ''
              alias serve="zola serve"
            '';
          };
        }
    );
}
